import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Banner from './components/Banner'
import ImgText from './components/ImgText'
import Slider from './components/Slider'
import Card from './components/Card'
import Text from './components/Text'
import Image from './components/Image'

const App = () => {
    return (
        <>
            <Header element="dream"/>
            <Main>
                <Slider element='dream section gray' />
                <Image element='section dream' title ="포트폴리오가 실력이다." />
                <ImgText element='section dream gray' title="이미지 텍스트 유형" />
                <Card element='section dream' title="웹스토리보이 강의" />
                <Banner element='dream'title="배너영역" />
                <Text element='section dream' title="스크립트를 익히는 방법" />
            </Main>
            <Footer element='dream section gray' />
        </>

    )
}

export default App
