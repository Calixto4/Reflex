/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading } from "@radix-ui/themes"
import { Link_1fa04d0236bd4e7c6b25b49421a3b4c3, Link_5d5ce14c64ddfdb0c14f8e1f51997406, Link_9e12cc3bca31e44e1f10569f86700288, Link_f412555058b09d03b442871f80b6bb10 } from "$/utils/stateful_components"
import { StateContexts } from "$/utils/context"
import NextHead from "next/head"



export function Grid_0a7e9681438583ee3c149ce91c75a6c8 () {
  
  const reflex___state____state__mi_web___pages___imagen____image_state = useContext(StateContexts.reflex___state____state__mi_web___pages___imagen____image_state)





  
  return (
    <RadixThemesGrid columns={"repeat(auto-fit, minmax(250px, 1fr))"} css={({ ["width"] : "100%" })} gap={"4"}>

<>{ reflex___state____state__mi_web___pages___imagen____image_state.images.map((image_url, index_81a6e2054de31159) => (
  <RadixThemesDialog.Root key={index_81a6e2054de31159} open={(reflex___state____state__mi_web___pages___imagen____image_state.selected_image === image_url)}>

<RadixThemesDialog.Trigger>

<RadixThemesBox css={({ ["padding"] : "0.5em" })}>

<img css={({ ["width"] : "100%", ["height"] : "200px", ["objectFit"] : "cover", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["transition"] : "all 0.3s ease", ["cursor"] : "pointer" }) })} src={image_url}/>
</RadixThemesBox>
</RadixThemesDialog.Trigger>
<RadixThemesDialog.Content css={({ ["maxWidth"] : "90vw", ["maxHeight"] : "90vh" })}>

<RadixThemesDialog.Title>

{"Ver imagen"}
</RadixThemesDialog.Title>
<img css={({ ["width"] : "100%", ["height"] : "auto", ["objectFit"] : "contain" })} src={image_url}/>
<RadixThemesFlex css={({ ["marginTop"] : "1em" })} gap={"3"}>

<RadixThemesDialog.Close>

<RadixThemesButton color={"red"}>

{"Cerrar"}
</RadixThemesButton>
</RadixThemesDialog.Close>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
))}</>
</RadixThemesGrid>
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
<RadixThemesBox css={({ ["marginLeft"] : "250px", ["width"] : "calc(100% - 250px)" })}>

<RadixThemesBox css={({ ["padding"] : "2em" })}>

<RadixThemesHeading css={({ ["marginBottom"] : "2em" })} size={"4"}>

{"Galer\u00eda de Im\u00e1genes"}
</RadixThemesHeading>
<Grid_0a7e9681438583ee3c149ce91c75a6c8/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
<NextHead>

<title>

{"MiWeb | Imagen"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
