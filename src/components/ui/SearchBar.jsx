export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return <>
        <form>
            <input
                type="text"
                placeholder="검색할 제품명을 입력하세요."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                재고가 있는 제품만 보기
            </label>
        </form>
    </>
}