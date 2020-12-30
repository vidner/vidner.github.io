import wasmInit, {check} from "./pkg/nwa_lib.js";

const submitFlag = async (flag) => {
  const helloWorld = await wasmInit("./pkg/nwa_lib_bg.wasm");
  var flag=document.getElementById("flag").value;  
  if (check(flag)){
    alert("🚩🚩🚩💯💯💯😤😤😤");
  }
};

document.getElementById("submit").addEventListener("click", submitFlag);