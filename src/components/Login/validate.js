export default function validate({ id, password }) {
    const errors = {};
  
    // if (!id) {
    //   errors.id = "아이디가 입력되지 않았습니다.";
    // }
    // else if (id.length < 8) {
    //   errors.id = "8자 이상의 아이디를 사용해야 합니다.";
    // }
  
    // if (!password) {
    //   errors.password = "비밀번호가 입력되지 않았습니다.";
    // }
    // if (password.length < 8) {
    //     // errors.id = " "
    //   errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
    // }

    if (id && password !== "1111") {
        errors.id = " "
        errors.password = "● 정보가 일치하지 않습니다.";
    }
  
    return errors;
  }