var ethMeConfig = {
  address: addressHex,
  chainId: chainId,
  rpcUrl: rpcURL,
  isEthereum: true,
  isDebug: false
};
var ethMeProvider = new window.TrustWeb3Provider(ethMeConfig);
ethMeProvider.isMetaMask = true;
ethMeProvider._metamask = { isUnlocked: () => Promise.resolve(true) };
window.ethereum = ethMeProvider;
window.ethereum.on = () => { };
window.web3 = new window.Web3(ethMeProvider);
window.web3.eth.defaultAccount = ethMeConfig.address;

if (cfxAddressHex.length > 0) {
  var cfxMeConfig = {
    address: cfxAddressHex,
    chainId: cfxNetworkId,
    rpcUrl: cfxRpcUrl,
    isEthereum: false,
    isDebug: false
  };
  var cfxMeProvider = new window.TrustWeb3Provider(cfxMeConfig);
  cfxMeProvider.isConfluxPortal = true;
  window.conflux = cfxMeProvider;
  window.conflux.on = () => { };
  window.confluxJS = new window.ConfluxJSSDK.Conflux({
    url: cfxMeConfig.rpcUrl,
    networkId: cfxMeConfig.chainId
  });
  window.confluxJS.provider = cfxMeProvider;
  window.confluxJS.defaultAccount = cfxMeConfig.address;
}

window.hashKeyMeMessage = async function (isEthereum, req) {
  try {
    var type = isEthereum ? "Ethereum" : "Conflux";
    console.log(`===> ${type} Request`, JSON.stringify(req));
    var result;
    var p;
    switch (req.method) {
      case "requestAccounts":
        const enable = await window.flutter_inappwebview.callHandler("enableAccount", "")
        result = enable === true ? [isEthereum ? addressHex : cfxAddressHex] : [];
        mySendResponse(isEthereum, req.id, result)
        break
      case "signTransaction":
        const txHash = await window.flutter_inappwebview.callHandler(
          isEthereum ? "signTransaction" : "cfx_signTransaction", { "data": req.params });
        console.log('txHash', txHash, req.id)
        if (typeof txHash == 'string' && txHash.startsWith('0x') && txHash.length == 66) {
          mySendResponse(isEthereum, req.id, txHash)
        } else {
          mySendError(isEthereum, req.id, txHash ? txHash : "txHash undefined")
        }
        break
      case "signMessage":
        p = {
          "data": req.params.data, "raw": req.params.raw,
          "type": "signMessage", "isEthereum": isEthereum
        }
        result = await window.flutter_inappwebview.callHandler("signMessage", p);
        mySendResponse(isEthereum, req.id, result)
        break
      case "signPersonalMessage":
        p = {
          "data": req.params.data, "raw": req.params.raw,
          "type": "signPersonalMessage", "isEthereum": isEthereum
        }
        result = await window.flutter_inappwebview.callHandler("signMessage", p);
        return mySendResponse(isEthereum, req.id, result)
      case "signTypedMessage":
        p = {
          "data": req.params.data, "raw": req.params.raw,
          "type": "signTypedMessage", "isEthereum": isEthereum
        }
        result = await window.flutter_inappwebview.callHandler("signMessage", p);
        mySendResponse(isEthereum, req.id, result)
        break
      case "ecRecover":
        p = { "signature": req.signature, "message": signature.message }
        result = await window.flutter_inappwebview.callHandler("ecRecover", p)
        mySendResponse(isEthereum, req.id, result)
        break
      case "switchEthereumChain":
        await window.flutter_inappwebview.callHandler("switchEthereumChain", req.params);
        mySendResponse(isEthereum, req.id, "")
        break
      case "addEthereumChain":
        await window.flutter_inappwebview.callHandler("addEthereumChain", req.params);
        mySendResponse(isEthereum, req.id, null)
        break
      default:
        window.flutter_inappwebview.callHandler("error", { "msg": "===> ethereum Request undefined" });
        mySendError(isEthereum, req.id, `===> ${type} Request is undefined`)
        break
    }
  } catch (err) {
    console.log(`===> error: ${err}`);
    window.flutter_inappwebview.callHandler("error", { "msg": err.message });
    mySendError(isEthereum, req.id, err.message)
  }
};

window.mySendResponse = function (isEthereum, id, data) {
  if (isEthereum) {
    ethereum.sendResponse(id, data)
  } else {
    conflux.sendResponse(id, data)
  }
};

window.mySendError = function (isEthereum, id, data) {
  if (id == null || id == undefined)
    id = ""
  if (isEthereum) {
    ethereum.sendError(id, data)
  } else {
    conflux.sendError(id, data)
  }
};