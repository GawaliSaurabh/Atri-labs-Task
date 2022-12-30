import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv48Cb() {
	const onClick = useCallback(callbackFactory("Div48", "Partner", "/Hero/Partner", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox65Cb() {
	const onClick = useCallback(callbackFactory("TextBox65", "Partner", "/Hero/Partner", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}