import React, { useEffect, useState } from 'react'

const Question02 = () => {
    // 정보가 String데이터인지 Array데이터인지 모르기에 고객의 주문 한개의 정보만 받아온다는 설정으로 코딩해보았습니다. :)
    const [userFoods, setUserFoods] = useState();           // 음식 정보 변수
    const [foodCOAData, setFoodCOAData] = useState();       // 원자재 정보 변수
    const [foodPriceData, setFoodPriceData] = useState();   // 가격 정보 변수

    const getData = async () => {
        try {
            const userFoodList = await userFoodList();      // 고객 음식정보
            const foodCOA = await foodCOA();                // 음식 원자재정보
            const foodPrice = await foodPrice();            // 음식의 가격정보

            setUserFoods(userFoodsResponse);                // 고객 음식정보 변수에 저장
            setFoodCOAData(foodCOAResponse);                // 음식 원자재정보 변수에 저장
            setFoodPriceData(foodPriceResponse);            // 음식의 가격정보 변수에 저장
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();                                          // 서버로부터 데이터를 받아오는 getData()함수 실행
    }, []);

    return (
        <>
            <div>
                <h3>[프론트] 문제 #2. 빠져나올 수가 없어요~! - callback 지옥 해결</h3>
                <p>김아무개 개발자가 고객이 먹은 음식정보도 가져오고, 음식에 담긴 원자재 표기도 가져오고
                    원자재의 가격도 들고 오려고 하다 보니 어려워요. 원하는 대로 순서대로 불러오지도 않고
                    뒤죽박죽인거 같아요. 여러분들이 김아무개 개발자를 도와주세요.
                    각 함수들은 Axios를 비동기 통신으로 서버로부터 정보를 뽑아오는 함수에요</p>
                <span>[보기]</span>
                <pre>
                    {`const userFoodList = () => { /* ... */ } // 고객이 먹은 음식정보
const foodCOA = () => { /* ... */ } // 음식의 원자재 정보
const foodPrice = () => { /* ... */ } // 음식의 가격 정보
const getData = () => {
  userFoodList();
  foodCOA();
  foodPrice();
}
`}
                </pre>
            </div>

            <span>고객 음식정보 : {userFoods}</span>
            <span>음식 원자재정보 : {foodCOAData}</span>
            <span>음식의 가격정보 : {foodPriceData}</span>
        </>
    )
}

export default Question02