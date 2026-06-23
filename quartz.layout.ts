import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Компоненты, которые отображаются на ВСЕХ страницах (шапка сайта)
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/0-83/chillroom-wiki",
    },
  }),
}

// Макет для ОБЫЧНЫХ страниц (твои статьи, правила, донат)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(), 
    Component.ContentMeta(), 
    Component.TagList()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()), // Оглавление статьи слева
  ],
  right: [], // Правая колонка пустая — граф убран, центральная часть расширилась!
}

// Макет для СТРАНИЦ-СПИСКОВ (страницы папок и тегов)
// ВАЖНО: Quartz ищет этот блок, возвращаем его на место в чистом виде
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [], // Здесь тоже правая панель пустая
}