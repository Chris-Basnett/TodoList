
import './App.css'
import Header from './component/header'
import EditList from './components/todoList'
import Footer from './components/footer'

function App() {
  return (
    <div id="main">
      <Header>
        <h1>To do list!</h1>
      </Header>
      <p>Enter items to the list by pressing the "Enter" key or clicking the "Add item" button.</p>
      <p>Clicking on the item will mark it as completed.</p>
      <div id="EditList">
        <EditList />
      </div>
      <Footer />
    </div>
  )
}
export default App