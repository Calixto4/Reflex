/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import NextLink from "next/link"
import { Home as LucideHome, Image as LucideImage, Info as LucideInfo, Mail as LucideMail } from "lucide-react"
import NextHead from "next/head"



export function Button_788fd2ef342e24a868a08d8752f1da14 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9cb92bf213de5d2e0dfdb55ea14ba5ec = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.incrementar", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton color={"green"} onClick={on_click_9cb92bf213de5d2e0dfdb55ea14ba5ec}>

{"Incrementar"}
</RadixThemesButton>
  )
}

export function Link_f412555058b09d03b442871f80b6bb10 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__mi_web___state____state = useContext(StateContexts.reflex___state____state__mi_web___state____state)


  const on_click_90bd2bcbc11c6c6c46f98df9717a0122 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.set_route", ({ ["route"] : "/acerca" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} onClick={on_click_90bd2bcbc11c6c6c46f98df9717a0122}>

<NextLink href={"/acerca"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : ((reflex___state____state__mi_web___state____state.current_route === "/acerca") ? "rgba(255,255,255,0.1)" : "transparent"), ["padding"] : "1em", ["borderRadius"] : "8px", ["width"] : "100%", ["&:hover"] : ({ ["background"] : "rgba(255,255,255,0.05)" }) })} direction={"row"} gap={"3"}>

<LucideInfo css={({ ["color"] : "var(--current-color)" })} size={20}/>
<RadixThemesText as={"p"}>

{"Acerca de"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_9e12cc3bca31e44e1f10569f86700288 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__mi_web___state____state = useContext(StateContexts.reflex___state____state__mi_web___state____state)


  const on_click_b8f358a7eced160e7d3c99f3e5fc5fde = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.set_route", ({ ["route"] : "/imagen" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} onClick={on_click_b8f358a7eced160e7d3c99f3e5fc5fde}>

<NextLink href={"/imagen"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : ((reflex___state____state__mi_web___state____state.current_route === "/imagen") ? "rgba(255,255,255,0.1)" : "transparent"), ["padding"] : "1em", ["borderRadius"] : "8px", ["width"] : "100%", ["&:hover"] : ({ ["background"] : "rgba(255,255,255,0.05)" }) })} direction={"row"} gap={"3"}>

<LucideImage css={({ ["color"] : "var(--current-color)" })} size={20}/>
<RadixThemesText as={"p"}>

{"Galer\u00eda"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Button_16da1e89d5d78678a0cd710ac7d05b47 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_71ebc45688ae12290354ca9488e5fe6e = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.disminuir", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton color={"red"} onClick={on_click_71ebc45688ae12290354ca9488e5fe6e}>

{"Disminuir"}
</RadixThemesButton>
  )
}

export function Text_bc41c807dd3f8df47cf6b8ff9a0930e5 () {
  
  const reflex___state____state__mi_web___state____state = useContext(StateContexts.reflex___state____state__mi_web___state____state)





  
  return (
    <RadixThemesText as={"p"} css={({ ["fontSize"] : "2em" })}>

{reflex___state____state__mi_web___state____state.count}
</RadixThemesText>
  )
}

export function Link_1fa04d0236bd4e7c6b25b49421a3b4c3 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__mi_web___state____state = useContext(StateContexts.reflex___state____state__mi_web___state____state)


  const on_click_1c821ebbccb319b71742558000f9414c = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.set_route", ({ ["route"] : "/" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} onClick={on_click_1c821ebbccb319b71742558000f9414c}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : ((reflex___state____state__mi_web___state____state.current_route === "/") ? "rgba(255,255,255,0.1)" : "transparent"), ["padding"] : "1em", ["borderRadius"] : "8px", ["width"] : "100%", ["&:hover"] : ({ ["background"] : "rgba(255,255,255,0.05)" }) })} direction={"row"} gap={"3"}>

<LucideHome css={({ ["color"] : "var(--current-color)" })} size={20}/>
<RadixThemesText as={"p"}>

{"Inicio"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_5d5ce14c64ddfdb0c14f8e1f51997406 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__mi_web___state____state = useContext(StateContexts.reflex___state____state__mi_web___state____state)


  const on_click_17434b5510922eef38725881690eed72 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.set_route", ({ ["route"] : "/contacto" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} onClick={on_click_17434b5510922eef38725881690eed72}>

<NextLink href={"/contacto"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : ((reflex___state____state__mi_web___state____state.current_route === "/contacto") ? "rgba(255,255,255,0.1)" : "transparent"), ["padding"] : "1em", ["borderRadius"] : "8px", ["width"] : "100%", ["&:hover"] : ({ ["background"] : "rgba(255,255,255,0.05)" }) })} direction={"row"} gap={"3"}>

<LucideMail css={({ ["color"] : "var(--current-color)" })} size={20}/>
<RadixThemesText as={"p"}>

{"Contacto"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["width"] : "250px", ["height"] : "100vh", ["background"] : "blue.900", ["position"] : "fixed", ["left"] : "0", ["top"] : "0", ["zIndex"] : "900" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start" })} direction={"column"} gap={"2"}>

<RadixThemesHeading css={({ ["padding"] : "1em" })} size={"5"}>

{"Men\u00fa"}
</RadixThemesHeading>
<Link_1fa04d0236bd4e7c6b25b49421a3b4c3/>
<Link_9e12cc3bca31e44e1f10569f86700288/>
<Link_5d5ce14c64ddfdb0c14f8e1f51997406/>
<Link_f412555058b09d03b442871f80b6bb10/>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["marginLeft"] : "250px", ["width"] : "calc(100% - 250px)", ["padding"] : "2em", ["marginTop"] : "2em" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"4"}>

<RadixThemesHeading size={"4"}>

{"Contador"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"4"}>

<Button_16da1e89d5d78678a0cd710ac7d05b47/>
<Text_bc41c807dd3f8df47cf6b8ff9a0930e5/>
<Button_788fd2ef342e24a868a08d8752f1da14/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<NextHead>

<title>

{"MiWeb | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
