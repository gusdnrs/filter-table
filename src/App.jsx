import FilterableProductTable from "./components/ui/FilterableProductTable";
import "./App.css";

const products = [
  { category: "과일", price: "1,500 원", stocked: true, name: "사과" },
  { category: "과일", price: "1,500 원", stocked: true, name: "포도" },
  { category: "과일", price: "3,000 원", stocked: false, name: "자두" },
  { category: "채소", price: "3,000 원", stocked: true, name: "시금치" },
  { category: "채소", price: "6,000 원", stocked: false, name: "고구마" },
  { category: "채소", price: "1,500 원", stocked: true, name: "무" }
];

export default function App() {
  return <div className="market-board">
    <h1>🥬 우리동네 야채가게 🍎</h1>
    <FilterableProductTable products={products} />
  </div>
}
