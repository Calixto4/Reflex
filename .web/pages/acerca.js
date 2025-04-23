/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { Link_1fa04d0236bd4e7c6b25b49421a3b4c3, Link_5d5ce14c64ddfdb0c14f8e1f51997406, Link_9e12cc3bca31e44e1f10569f86700288, Link_f412555058b09d03b442871f80b6bb10 } from "$/utils/stateful_components"
import NextLink from "next/link"
import { Github as LucideGithub, Linkedin as LucideLinkedin } from "lucide-react"
import NextHead from "next/head"



export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

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
<RadixThemesBox css={({ ["marginLeft"] : "250px", ["width"] : "calc(100% - 250px)", ["padding"] : "2em" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["padding"] : "2em", ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesHeading size={"4"}>

{"Acerca de Mi Web"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["marginBottom"] : "1em" })}>

{"\u00a1Bienvenido a nuestra aplicaci\u00f3n hecha con Reflex + Pyrhon!"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "start" })} direction={"column"} gap={"3"}>

<RadixThemesHeading size={"5"}>

{"Caracter\u00edsticas Principales"}
</RadixThemesHeading>
<ul css={({ ["direction"] : "column", ["listStyleType"] : "none", ["spacing"] : "2", ["marginBottom"] : "2em" })}>

<li>

{"\ud83d\ude80 Navegaci\u00f3n con men\u00fa lateral"}
</li>
<li>

{"\ud83e\uddee Contador interactivo"}
</li>
<li>

{"\ud83d\uddbc\ufe0f Galer\u00eda de im\u00e1genes"}
</li>
<li>

{"\ud83d\udce7 Formulario de contacto"}
</li>
</ul>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesHeading size={"5"}>

{"Nuestro Equipo"}
</RadixThemesHeading>
<RadixThemesGrid columns={"2"} css={({ ["width"] : "100%" })} gap={"4"}>

<RadixThemesBox css={({ ["border"] : "1px solid #eee", ["padding"] : "1.5em", ["borderRadius"] : "lg", ["&:hover"] : ({ ["transform"] : "translateY(-5px)", ["transition"] : "all 0.3s ease", ["boxShadow"] : "lg" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesAvatar css={({ ["name"] : "Carlos J. Sala", ["marginBottom"] : "1em" })} size={"6"}/>
<RadixThemesHeading size={"4"}>

{"Carlos J. Sala"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "gray.600" })}>

{"Desarrollador Frontend y Backend"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "sm" })}>

{"Especialista en Python y Reflex"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/tecnicsala"} passHref={true}>

<LucideGithub css={({ ["color"] : "var(--current-color)" })} size={20}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://linkedin.com/in/juanperez"} passHref={true}>

<LucideLinkedin css={({ ["color"] : "var(--current-color)" })} size={20}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["border"] : "1px solid #eee", ["padding"] : "1.5em", ["borderRadius"] : "lg", ["&:hover"] : ({ ["transform"] : "translateY(-5px)", ["transition"] : "all 0.3s ease", ["boxShadow"] : "lg" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesAvatar css={({ ["name"] : "Marta navarro", ["marginBottom"] : "1em" })} size={"6"}/>
<RadixThemesHeading size={"4"}>

{"Marta Navarro"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "gray.600" })}>

{"Dise\u00f1o de productos"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "sm" })}>

{"Especialista en dise\u00f1o y creaci\u00f3n de accesorios de moda."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/navaria"} passHref={true}>

<LucideGithub css={({ ["color"] : "var(--current-color)" })} size={20}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://linkedin.com/in/navaria"} passHref={true}>

<LucideLinkedin css={({ ["color"] : "var(--current-color)" })} size={20}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesGrid>
</RadixThemesFlex>
<RadixThemesLink asChild={true} css={({ ["color"] : "blue.500", ["marginTop"] : "2em", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/tu-usuario/tu-repo"} passHref={true}>

{"Visita nuestro GitHub"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<NextHead>

<title>

{"MiWeb | Acerca"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
