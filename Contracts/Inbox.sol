pragma solidity ^0.4.23;

contract Inbox {

    string public indo;

    function Inbox (string IM) public {
        indo = IM;
    }

    function setMessage (string NewMessage) public {
        indo = NewMessage;
    }



}
