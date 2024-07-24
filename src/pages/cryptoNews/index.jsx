import React, { Fragment } from 'react'
import Navbar from '../../element/navigation'
import Cryptonews from '../../fragment/cryptoNews/cryptoNews'

const CryptoNewsPage = () => {
  return (
    <Fragment>
        <Navbar />
        <Cryptonews />
    </Fragment>
  )
}

export default CryptoNewsPage
