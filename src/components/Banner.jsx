import React from 'react'

const Banner = ( props ) => {
    return (
        <section id="bannerType" className={`banner__wrap ${props.element}`}>
                <h2 className="blind">{props.title}</h2>
                <div className="banner__inner">
                    <h3 className="title">웹표준 사이트</h3>
                    <p className="desc">
                        성공하려면 당신을 찾아오는 모든 도전을 다 받아들여야 한다. 마음에 드는 것만 골라 받을 수는 없다. 
                        <a href="/" title="유튜브 페이지 이동">- 마이크 가프카</a>
                    </p>
                    <span className="small">배너 유형01</span>
                </div>
            </section>
    )
}

export default Banner