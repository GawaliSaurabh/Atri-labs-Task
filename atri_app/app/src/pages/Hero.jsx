import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv54Cb, useTextBox70Cb, useTextBox71Cb } from "../page-cbs/Hero";
import "../page-css/Hero.css";
import "../custom/Hero";

export default function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div54Props = useStore((state)=>state["Hero"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Hero"]["Div54"]);
const Div54Cb = useDiv54Cb()
const TextBox70Props = useStore((state)=>state["Hero"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Hero"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Hero"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Hero"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()

  return (<>
  <Div1 className="p-Hero Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<TextBox1 className="p-Hero TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div1>
<TextBox1 className="p-Hero TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
  </>);
}
