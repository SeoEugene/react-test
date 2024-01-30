import React from 'react'

const Question03 = () => {
    // 보기
    var market = ['생선', '과일']
    var fish = ['고등어', '갈치', '대게', '연어', '삼치']
    var fishPrice = [1000, 2000, 3000, 4000, 2000]
    var fruit = ['사과', '멜론', '포도', '복숭아']
    var fruitPrice = [2000, 3000, 6000, 2000]

    // 보기의 데이터는 배열 형태이므로 좀 더 보기 쉬운 객체타입으로 변경
    var marketObj = market.reduce(function (obj, category) {
        obj[category] = {};
        return obj;
    }, {});

    // 생선 데이터
    fish.forEach(function (fish, index) {                   // 객체 안에 생선 데이터 저장
        marketObj[market[0]][fish] = fishPrice[index]
    })
    const fishData = marketObj[market[0]]                   // 출력을 위한 생선 데이터

    // 과일 데이터
    fruit.forEach(function (fruit, index) {                 // 객체 안에 과일 데이터 저장
        marketObj[market[1]][fruit] = fruitPrice[index]
    })
    const fruitData = marketObj[market[1]]                  // 출력을 위한 과일 데이터

    return (
        <>
            <div>
                <h3>[프론트] 문제 #3. 어쩌다 마주친 배열이 개미지옥</h3>
                <p>박나나 개발자가 이마트에서 판매되고 있는 상품을 관리하려고 매장 분류별 상품과 금액을
                    정리하려고 하는데 정보를 조회했더니 전부 배열로 정리되서 분류하기 어려워하고 있어요.
                    좀 더 쉽게 관리를 하고 싶은데, 어떻게 하면 좋을까요?</p>

                <span>[보기]</span>
                <pre>
                    {`var market = [생선, 과일]
var fish = ['고등어', ‘갈치', ‘대게’, ‘연어’, ‘삼치’]
var fishPrice = [1000, 2000, 3000, 4000, 2000]
var fruit = [‘사과’, ‘멜론’, ‘포도’, ‘복숭아’]
var fruitPrice = [2000, 3000, 6000, 2000]
`}
                </pre>
                <span>[원하는 출력]</span>
                <pre>
                    {`마트 생선
고등어 1000
갈치 2000
대게 3000
연어 4000
삼치 2000
과일	
사과 2000
멜론 3000
포도 6000
복숭아 2000
`}
                </pre>
            </div>

            <h3>마트{market[0]}</h3>
            <ul>
                {Object.entries(fishData).map(([product, price], index) => (
                    < li key={index} >{product} {price}</li>
                ))}
            </ul >
            <h3>{market[1]}</h3>
            <ul>
                {Object.entries(fruitData).map(([product, price], index) => (
                    < li key={index} >{product} {price}</li>
                ))}
            </ul>
        </>
    )
}

export default Question03