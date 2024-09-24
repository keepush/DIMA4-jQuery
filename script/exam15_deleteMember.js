// 서버로부터 받은 데이터
let receivedData = [
    { "name": "홍길동", "email": "hong@naver.com", "phone": "010-1111-2222" }
    , { "name": "전우치", "email": "jeon@naver.com", "phone": "010-2222-2332" }
    , { "name": "임꺽정", "email": "lim@naver.com", "phone": "010-1155-2442" }
    , { "name": "손오공", "email": "son@naver.com", "phone": "010-1113-2222" }
    , { "name": "사오정", "email": "ojeong@naver.com", "phone": "010-1231-2643" }
];

$(function () {
    // 1) receive 버튼에 이벤트 설정해서 초기화
    $('#receive').on('click', init);

    // 2) 전체 선택 checkbox를 체크하면 모두 체크되도록 설정
    $('#checkAll').on('click', function () {
        if ($(this).is(':checked')) {
            $('tbody input[type=checkbox]').prop('checked', true);
        } else {
            $('tbody input[type=checkbox]').prop('checked', false);
        }
    });

    // 3) 삭제 버튼을 클릭하면 체크된 모든 고객 명단을 삭제
    // 3-1. 삭제 버튼에 이벤트 설정
    $('#deleteMember').on('click', function () {
        let checkItem = $('tbody input[type=checkbox]:checked');
        // 콘솔창 확인 시, input의 부모 - td의 부모 - tr을 삭제해야 데이터 전체 삭제됨
        checkItem.parent().parent().remove();
    })
});



function init() {
    let final = '';
    $.each(receivedData, function (index, item) {
        let name = item['name'];
        let email = item['email'];
        let phone = item['phone'];

        final += `
                <tr>
                    <td class="box"><input type="checkbox"></td>
                    <td class="name">${name}</td>
                    <td class="email">${email}</td>
                    <td class="phone">${phone}</td>
                    <td class="btn"><input type="button" class="btn" value="삭제"></td>
                </tr>
                `;
    })

    $('tbody').html(final);
    $('.btn').on('click', deleteItem);       // 화면에 보여지는 시점에만 이벤트 설정 가능하므로 html 삽입 이후에 가능
}

function deleteItem() {
    $(this).parent().parent().remove();
}

// function init() {
//    $('tbody').empty();

//    $.each(receivedData, function (index, item) {
//        let name = item.name;
//        let email = item.email;
//        let phone = item.phone;

//        let final = `
//        <tr>
//            <td class="box"><input type="checkbox"></td>
//            <td class="name">${name}</td>
//            <td class="email">${email}</td>
//            <td class="phone">${phone}</td>
//            <td class="btn"><input type="button" class="btn" value="삭제"></td>
//        </tr>
//    `;
//        $('tbody').append(final);
//    })
// }
