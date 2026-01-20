import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow"

export default function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {

        // filterText가 포함되어 있지 않으면 건너뜀
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) { // -1은 찾지 못했다는 의미, 대소문자 구분없이 검색
            return;
        }
        // inStockOnly가 true이고 재고가 없으면 건너뜀
        if (inStockOnly && !product.stocked) {
            return;
        }
        // 카테고리가 다르면 카테고리 행 추가
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        // 제품 행 추가
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </>
}
