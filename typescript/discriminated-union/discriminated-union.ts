
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