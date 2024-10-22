function Header(){
    return (
      <>
      <nav>
        <ul className='list-none flex justify-between p-1'>
          <li><p>Loogo</p></li>
          <li className='flex gap-3'>
            <a>Elemento 1</a>
            <a>Elemento 2</a>
            <a>Elemento 3</a>
          </li>
        </ul>
      </nav>
    </>
    )
  }

  export default Header