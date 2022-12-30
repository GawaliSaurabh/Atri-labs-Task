import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv54Cb() {
	const onClick = useCallback(callbackFactory("Div54", "Hero", "/Hero", "onClick", 
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
export function useTextBox70Cb() {
	const onClick = useCallback(callbackFactory("TextBox70", "Hero", "/Hero", "onClick", 
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
export function useTextBox71Cb() {
	const onClick = useCallback(callbackFactory("TextBox71", "Hero", "/Hero", "onClick", 
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