import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";

function DataTable() {
    const [ isLoad, setLoad ] = useState(false);
    const [ mode, setMode ] = useState(0); // 0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ isDeleting, setDeleting ] = useState(false); 

    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts)); // 페이지가 최초로 한번 열렸을 때 null이면 빈배열 아니면 lsProducts에 넣겠다
        setLoad(true); // 페이지가 실행될때 true로 바꾸겠다
    }, []);

    useEffect(() => {
            localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return ( 
        <div className="table-main-container"> 
            <DataTableHeader mode={mode} setMode={setMode} setProducts={ setProducts } setDeleting={setDeleting} />
            <DataTableBody mode={mode} setMode={setMode} products={products} setProducts={ setProducts } isDeleting={isDeleting} setDeleting={setDeleting} />   
        </div>
     );
}

export default DataTable;