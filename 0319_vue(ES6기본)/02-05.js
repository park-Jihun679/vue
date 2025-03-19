// 기본값 할당
function addContact(
  name,
  number,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  console.log(
    `name=${name}, number=${number}, home=${home}, address=${address}, email=${email}`
  );
}
addContact('홍길동', '010-222-3331');
addContact('이몽룡', '010-222-3331', '02-3422-9900', '서울시');
