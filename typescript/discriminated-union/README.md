# 判別可能なユニオン型　  
ユニオン型として一括りにして扱いたいが異なる要素を持つものに対して有効です。  
例えばECサイトでページごとに異なる処理を行いたいとします。  
すると以下のような処理になると思います。  

```
type PageType = "category" | "brand" | "search"
function do(page: PageType) {
  if (page === "category") {
    // カテゴリーページの処理
    return
  }
  if (page === "brand") {
    // ブランドページの処理
    return
  }
  // 検索ページの処理
  return
}
```

さらに、ページごとに異なる要素を持っているとします。  
例えばカテゴリーページなら、そのカテゴリーのIDや名前、　　
ブランドページならそのブランドのIDや名前、
検索ページなら検索条件などです。  
すると関数の部分引数として追加するなどの解決策があります.  
```
function do(page: PageType, category?: Category, brand?: Brand, searchConditions: Condition[]) {
  //
}
```
判別可能なユニオン型を使うことで上記のような処理を型安全にスマートに書くことができます  
```
type PageType = CategoryPage | BrandPage | SearchPage
type CategoryPage = {
  type: "category",
  categoryId: string,
  categoryName: string
}
type BrandPage = {
  type: "brand",
  brandId: string,
  brandName: string,
}
type SearchPage = {
  type: "search",
  conditions: string[],
}
// pageごとに何かをやる処理
function pageXXX(page: PageType){
  if (page.type === "category") {
    // page.categoryIdを使った処理
    page.categoryId
    page.categoryName
    return
  }
  if (page.type === "brand") {
    // page.brandIdを使った処理
    page.brandId
    page.brandName
    return
  }
  // page.conditionsを使った処理
  page.conditions
}
```