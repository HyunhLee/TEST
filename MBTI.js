const questions = [
    { disagree: 'E', agree: 'I', text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.` },
    { disagree: 'S', agree: 'N', text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.` },
    { disagree: 'T', agree: 'F', text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.` },
    { disagree: 'J', agree: 'P', text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.` },
    { disagree: 'E', agree: 'I', text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.` },
    { disagree: 'S', agree: 'N', text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.` },
    { disagree: 'T', agree: 'F', text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.` },
    { disagree: 'J', agree: 'P', text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.` },
]
// 초기값 설정
const type = {E:0,I:0,N:0,S:0,F:0,T:0,P:0,J:0};
let MBTI = "";
// 매우 아니다 ~ 매우 그렇다 순서로 0부터 4까지 할당
const ans = [0,1,2,3,4,3,2,1];

// MBTI 계산 함수
const culc = (questions, ans) => {
    // 답의 갯수가 부족하거나 많을 경우 리턴
    if(ans.length != questions.length) return;
    // 질문의 갯수만큼 반복하며 점수 누적
    for(let i = 0; i < questions.length; i++) {
        // E, I 구분
        if(questions[i].disagree == 'E') {
            if(ans[i] == 2) {
                type.E += 0;
                type.I += 0;
            } else if(ans[i] == 1) {
                type.E += 1;
            } else if(ans[i] == 0) {
                type.E += 2;
            } else if(ans[i] == 3) {
                type.I += 1;
            } else if(ans[i] == 4) {
                type.I += 2;
            }
        }
        // S, N 구분
        if(questions[i].disagree == 'S') {
            if(ans[i] == 2) {
                type.S += 0;
                type.N += 0;
            } else if(ans[i] == 1) {
                type.S += 1;
            } else if(ans[i] == 0) {
                type.S += 2;
            } else if(ans[i] == 3) {
                type.N += 1;
            } else if(ans[i] == 4) {
                type.N += 2;
            }
        }
        // F, T 구분
        if(questions[i].disagree == 'T') {
            if(ans[i] == 2) {
                type.T += 0;
                type.F += 0;
            } else if(ans[i] == 1) {
                type.T += 1;
            } else if(ans[i] == 0) {
                type.T += 2;
            } else if(ans[i] == 3) {
                type.F += 1;
            } else if(ans[i] == 4) {
                type.F += 2;
            }
        }
        // P, J 구분
        if(questions[i].disagree == 'J') {
            if(ans[i] == 2) {
                type.J += 0;
                type.P += 0;
            } else if(ans[i] == 1) {
                type.J += 1;
            } else if(ans[i] == 0) {
                type.J += 2;
            } else if(ans[i] == 3) {
                type.P += 1;
            } else if(ans[i] == 4) {
                type.P += 2;
            }
        }
    }
    // MBTI 완성
    if(type.E == type.I || type.E > type.I) {
        MBTI += 'E';
    } else if(type.E < type.I) {
        MBTI += 'I';
    }
    if(type.N == type.S || type.N > type.S) {
        MBTI += 'N';
    } else if(type.N < type.S) {
        MBTI += 'S';
    }
    if(type.F == type.T || type.F > type.T) {
        MBTI += 'F';
    } else if(type.E < type.I) {
        MBTI += 'T';
    }
    if(type.P == type.J || type.P > type.J) {
        MBTI += 'P';
    } else if(type.P < type.J) {
        MBTI += 'J';
    }
    console.log(MBTI);
};

culc(questions, ans);