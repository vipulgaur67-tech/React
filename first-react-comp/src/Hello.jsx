function Hello() {
  let number = 456;
  let myName = "Vipul";
  let fullName = () => {
    return "Vipul sahab";
  };

  return (
    <p>
      MessageNo: {number}I am a student {fullName()}
    </p>
  );
}

export default Hello;
