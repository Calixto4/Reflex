/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import NextLink from "next/link"
import { Github as LucideGithub, Home as LucideHome, Image as LucideImage, Info as LucideInfo, Linkedin as LucideLinkedin, Mail as LucideMail } from "lucide-react"
import NextHead from "next/head"



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
