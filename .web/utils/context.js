import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.mi_web___pages___imagen____image_state": {"images": ["/Pendientes_1.jpg", "/Pendientes_2.jpg", "/Pendientes_3.jpg", "/Pendientes_4.jpg", "/Pendientes_5.jpg", "/Pendientes_6.jpg", "/Pendientes_7.jpg", "/Pendientes_8.jpg", "/Pendientes_9.jpg", "/Pendientes_10.jpg", "/Pendientes_11.jpg", "/Pendientes_12.jpg", "/Pendientes_13.jpg", "/Pendientes_14.jpg", "/Pendientes_15.jpg", "/Pendientes_16.jpg", "/Pendientes_17.jpg", "/Pendientes_18.jpg", "/Pendientes_19.jpg", "/Pendientes_20.jpg", "/Pendientes_21.jpg", "/Pendientes_22.jpg", "/Pendientes_23.jpg", "/Pendientes_24.jpg", "/Pendientes_25.jpg"], "selected_image": ""}, "reflex___state____state.mi_web___state____state": {"count": 0, "current_route": "/"}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__mi_web___pages___imagen____image_state: createContext(null),
  reflex___state____state__mi_web___state____state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2025-04-24 23:26:54.680552"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__mi_web___pages___imagen____image_state, dispatch_reflex___state____state__mi_web___pages___imagen____image_state] = useReducer(applyDelta, initialState["reflex___state____state.mi_web___pages___imagen____image_state"])
  const [reflex___state____state__mi_web___state____state, dispatch_reflex___state____state__mi_web___state____state] = useReducer(applyDelta, initialState["reflex___state____state.mi_web___state____state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.mi_web___pages___imagen____image_state": dispatch_reflex___state____state__mi_web___pages___imagen____image_state,
      "reflex___state____state.mi_web___state____state": dispatch_reflex___state____state__mi_web___state____state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state value={ reflex___state____state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__mi_web___pages___imagen____image_state value={ reflex___state____state__mi_web___pages___imagen____image_state }>
    <StateContexts.reflex___state____state__mi_web___state____state value={ reflex___state____state__mi_web___state____state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
      <DispatchContext value={dispatchers}>
        {children}
      </DispatchContext>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state>
    </StateContexts.reflex___state____state__mi_web___state____state>
    </StateContexts.reflex___state____state__mi_web___pages___imagen____image_state>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state>
    </StateContexts.reflex___state____state>
  )
}