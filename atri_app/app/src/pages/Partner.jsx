import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv48Cb, useTextBox65Cb } from "../page-cbs/Partner";
import "../page-css/Partner.css";
import "../custom/Partner";

export default function Partner() {
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

  const Div48Props = useStore((state)=>state["Partner"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["Partner"]["Div48"]);
const Div48Cb = useDiv48Cb()
const TextBox65Props = useStore((state)=>state["Partner"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Partner"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()

  return (<>
  <Div1 className="p-Partner Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<TextBox1 className="p-Partner TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Div1>
  </>);
}
