/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import { Link_1fa04d0236bd4e7c6b25b49421a3b4c3, Link_5d5ce14c64ddfdb0c14f8e1f51997406, Link_9e12cc3bca31e44e1f10569f86700288, Link_f412555058b09d03b442871f80b6bb10 } from "$/utils/stateful_components"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import NextHead from "next/head"



export function Text_bc41c807dd3f8df47cf6b8ff9a0930e5 () {
  
  const reflex___state____state__mi_web___state____state = useContext(StateContexts.reflex___state____state__mi_web___state____state)





  
  return (
    <RadixThemesText as={"p"} css={({ ["fontSize"] : "2em" })}>

{reflex___state____state__mi_web___state____state.count}
</RadixThemesText>
  )
}

export function Button_788fd2ef342e24a868a08d8752f1da14 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9cb92bf213de5d2e0dfdb55ea14ba5ec = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___state____state.incrementar", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton color={"green"} onClick={on_click_9cb92bf213de5d2e0dfdb55ea14ba5ec}>

{"Incrementar"}
</RadixThemesButton>
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
