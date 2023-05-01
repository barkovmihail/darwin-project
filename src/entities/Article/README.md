## Entity of the article

Description:
An article is a set of components responsible for displaying an article

#### Public api

- Components

`ArticleDetails` - component with information about the article

`ArticleList` - Component with a list of articles

`ArticleViewSelector` - The switcher component for displaying a list of articles (tile, list)

`ArticleSortSelector` - A component with a choice of sorting the list of articles

`ArticleTypeTabs` - Component with article type selection

- types

`Article` - Type describing the article

- selectors

`getArticleDetailsData` - Selector for getting information about the currently opened article