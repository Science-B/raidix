import React, { useState, useEffect } from "react";
import productsService from "./app/services/productsService";
import ProductsListPage from "./app/components/page/productsListPage";
import SearchBar from "./app/components/ui/searchBar";
import DeleteModalWindow from "./app/components/ui/deleteModalWindow";
import EditModalWindow from "./app/components/ui/editModalWindow";
import AddModalWindow from "./app/components/ui/addModalWindow";
function App() {
  const [error, setError] = useState(null);
  const [currentProduct, setCurrentProduct] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [showDeleteModalWindow, setShowDeleteModalWindow] = useState(false);
  const [showEditModalWindow, setShowEditModalWindow] = useState(false);
  const [showAddModalWindow, setShowAddModalWindow] = useState(false);

  useEffect(() => {
    getDataList();
  }, []);
  async function getDataList() {
    try {
      const content = await productsService.get();
      setData(content);
    } catch (error) {
      errorCatcher(error);
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  function handleSearch(value) {
    setValue(value);
  }

  function handleDelete(id) {
    productsService.remove(id);
    window.location.reload();
    getDataList();
  }
  function handleEdit(available, customer) {
    const editedProduct = {
      available: available === "Да" ? true : false,
      customer: customer,
    };
    productsService.update(currentProduct.id, editedProduct);
    window.location.reload();
  }
  function handleAdd(name, weight, date, available, customer) {
    const addedProduct = {
      name: name,
      weight: weight,
      date: date,
      available: available === "Да" ? true : false,
      customer: customer,
    };
    productsService.add(addedProduct);
    window.location.reload();
  }
  function handleShowDeleteModalWindow(id) {
    setCurrentProduct(id);
    showDeleteModalWindow === false
      ? setShowDeleteModalWindow(true)
      : setShowDeleteModalWindow(false);
  }

  function handleShowEditModalWindow(item) {
    setCurrentProduct(item);
    showEditModalWindow === false
      ? setShowEditModalWindow(true)
      : setShowEditModalWindow(false);
  }
  function handleShowAddModalWindow() {
    showAddModalWindow === false
      ? setShowAddModalWindow(true)
      : setShowAddModalWindow(false);
  }
  const filteredData =
    data !== undefined
      ? data.filter((el) => {
          return el.name.toLowerCase().includes(value.toLowerCase());
        })
      : null;
  return (
    <>
      <div className="d-flex">
        <SearchBar onSearch={handleSearch} />
        <button
          type="button"
          class="btn btn-success btn-sm"
          onClick={handleShowAddModalWindow}
        >
          Добавить заказ
        </button>
      </div>
      <ProductsListPage
        onDelete={handleShowDeleteModalWindow}
        onEdit={handleShowEditModalWindow}
        products={filteredData}
      />
      <DeleteModalWindow
        showDelete={showDeleteModalWindow}
        onShowDelete={handleShowDeleteModalWindow}
        id={currentProduct}
        onDelete={handleDelete}
      />
      <EditModalWindow
        showChange={showEditModalWindow}
        onShowChange={handleShowEditModalWindow}
        currentProduct={currentProduct !== undefined ? currentProduct : ""}
        onEdit={handleEdit}
      />
      <AddModalWindow
        showAdd={showAddModalWindow}
        onShowAdd={handleShowAddModalWindow}
        onAdd={handleAdd}
      />
    </>
  );
}

export default App;
