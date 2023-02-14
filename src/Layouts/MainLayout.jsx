import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <div>
        <nav>
          <ul>
            <li>
              <Link style={{textDecoration : "none"}} to='/'>Home</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-heros-with-main'>RQ Super Heroes with Cast</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-parallel'>Parallel queries</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-parallel-dynamic'>Parallel Dynamic queries</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-depenedant-qr'>Dependant queries</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-paginated-qr'>Paginated queries</Link>
            </li>
            <li>
              <Link style={{textDecoration : "none"}} to='/rq-infinite-qr'>Infinite queries</Link>
            </li>
          </ul>
        </nav>
        <div>
        <Outlet />
      </div>
    </div>
    </>
  )
}
