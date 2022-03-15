$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault(); //submit 되면 새로고침되는거 막기
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $("#search").val(),
                    sort: "accuracy",  //클릭 이벤트? accuracy or latest
                },
            headers: { Authorization: "KakaoAK ${API_KEY}"}
        })
        .done(function(msg) {
            console.log(msg);
            const list= msg.documents;
            $(".books").empty(); //이전 검색 결과 지우기
                    for(let i=0; i <= list.length; i++) {
                        $(".books").append(`<tr class="book-search"><td class="img"><img src=${list[i].thumbnail}/></td><td class="book-info"><div>${list[i].title}</div><div>${list[i].authors}</div></td></tr>`);
                    }
            });
    });
});