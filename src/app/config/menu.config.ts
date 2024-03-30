type MenuUrlItem = { name: string; url: string; }

type MenuConfigType = {
  main: Array<MenuUrlItem>;
  footer: Array<MenuUrlItem>;
}

export const MENU_CONFIG: MenuConfigType = {
  "main": [
    {
      "name": "Home",
      "url": "/"
    },
    {
      "name": "About",
      "url": "/about"
    },
    {
      "name": "Contact",
      "url": "/contact"
    }
  ],
  "footer": [
    {
      "name": "Elements",
      "url": "/elements"
    },
    {
      "name": "Privacy Policy",
      "url": "/privacy-policy"
    }
  ]
}