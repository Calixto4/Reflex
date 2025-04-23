/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Link_1fa04d0236bd4e7c6b25b49421a3b4c3, Link_5d5ce14c64ddfdb0c14f8e1f51997406, Link_9e12cc3bca31e44e1f10569f86700288, Link_f412555058b09d03b442871f80b6bb10 } from "$/utils/stateful_components"
import NextHead from "next/head"



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

{"Contacto"}
</RadixThemesHeading>
<RadixThemesTextField.Root css={({ ["width"] : "300px" })} placeholder={"Nombre"}/>
<RadixThemesTextField.Root css={({ ["width"] : "300px" })} placeholder={"Email"}/>
<RadixThemesTextArea css={({ ["& textarea"] : null, ["width"] : "300px" })} placeholder={"Mensaje"}/>
<RadixThemesButton color={"blue"}>

{"Enviar"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<NextHead>

<title>

{"MiWeb | Contacto"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
