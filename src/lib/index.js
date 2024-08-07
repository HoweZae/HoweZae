// place files you want to import through the `$lib` alias in this folder.

export const link = {
    li: "https://www.linkedin.com/in/jedtomanan/",
    gh: "https://github.com/HoweZae",
    fb: "https://www.facebook.com/jedtomanan/",
    ig: "https://www.instagram.com/jose.tmnn/",
    // twt: "https://x.com/howe_zae",
}

export const header = [
    {logo: "/logo/li.png", color: "hover:to-cyan-200 active:from-cyan-300 active:to-cyan-300", link: link.li, handle: "jedtomanan"},
    {logo: "/logo/gh.svg", color: "hover:to-purple-200 active:from-purple-300 active:to-purple-300", link: link.gh, handle: "HoweZae"},
    {logo: "/logo/fb.png", color: "hover:to-blue-200 active:from-blue-300 active:to-blue-300", link: link.fb, handle: "jedtomanan"},
    {logo: "/logo/ig.png", color: "hover:to-red-100 active:from-red-200 active:to-red-200", link: link.ig, handle: "jose.tmnn"},
    // {logo: "/logo/twt.png", color: "hover:to-sky-100 active:from-sky-200 active:to-sky-200", link: link.twt, handle: "howe_zae"},
]

export function linkClicked() {
    console.log("Link clicked...");
    // TODO: code to change link text color to violet (to signify "clicked")
}

export function buttonHover() {
    console.log("Hovering on button...")
    // TODO: code to animate hovering on link (using gradient)
}