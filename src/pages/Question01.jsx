import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Question01 = () => {
    const navigate = useNavigate();
    const [leave, setLeave] = useState(false);

    // 계정 변수, 저는 최대 4개까지의 계정을 만들었습니다.
    const [sumAccount, setSumAccount] = useState(0)
    const [account1, setAccount1] = useState(0)
    const [account2, setAccount2] = useState(0)
    const [account3, setAccount3] = useState(0)
    const [account4, setAccount4] = useState(0)

    useEffect(() => {
        // 계산
        const calculateAccount = () => {
            const sumTotal = account1 + account2 + account3 + account4;
            setSumAccount(sumTotal);
        };
        calculateAccount();

        // 페이지 이동
        const handleBeforeUnload = (event) => {
            setLeave(true)
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [account1, account2, account3, account4, navigate]);

    // 각 4개의 창구 값을 set변수에 저장합니다.
    const handleAccount1 = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setAccount1(Number(value));
    }
    const handleAccount2 = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setAccount2(Number(value));
    }
    const handleAccount3 = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setAccount3(Number(value));
    }
    const handleAccount4 = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setAccount4(Number(value));
    }

    return (
        <>
            <div>
                <h3>[프론트] 문제 #1. 내가 원하는 타이밍 잡기! - useEffect와 Life Cycle</h3>
                <p>Hook을 이용해 페이지에 진입했을 때,
                    창구에 있는 돈을 합산하는 결과를 화면에 반환시켜 주고, 페이지를 나갔을 때,
                    ‘창구에 있는 합산된 정보는 사라집니다’라는 문구를 띄워주세요
                    (Typescript를 사용할 수 있다면 같이 활용해주세요)</p>
            </div>
            {leave && <p>창구에 있는 합산된 정보는 사라집니다</p>}
            {!leave &&
                <>
                    <span><label htmlFor="amount1">Account1:</label><input type="number" id="amount1" value={account1} onChange={handleAccount1} pattern="[0-9]*" /></span>
                    <span><label htmlFor="amount2">Account2:</label><input type="number" id="amount2" value={account2} onChange={handleAccount2} pattern="[0-9]*" /></span>
                    <span><label htmlFor="amount3">Account3:</label><input type="number" id="amount3" value={account3} onChange={handleAccount3} pattern="[0-9]*" /></span>
                    <span><label htmlFor="amount4">Account4:</label><input type="number" id="amount4" value={account4} onChange={handleAccount4} pattern="[0-9]*" /></span>
                    <h3>계좌의 총 금액: {sumAccount}</h3>
                </>
            }
        </>
    )
}

export default Question01