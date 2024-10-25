// 초기값 설정
const data = [1,2,3];
const selected = [2,3];

// 순서 바꾸기 함수
const change = (data, selected) => {
    // selected의 길이만큼 반복하며 data 원소 변경
    for(let i = 0; i < selected.length; i++) {
        // data에 없는 숫자가 포함됐을 경우 종료
        if(!data.includes(selected[i])) {
            break;
        }
        // selected와 같은 숫자의 index
        let sub = data.indexOf(data.find(n => n == selected[i]))-1;
        // 두 숫자의 위치 변경
        let del = data.splice(data.indexOf(data.find(n => n == selected[i])), 1, data[sub]);
        data.splice(sub, 1, del[0])
    }
    console.log(data);
};

change(data, selected);