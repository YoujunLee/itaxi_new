<?php
class DBC
{
	public $db;
	public $query;
	public $result;
	public function DBI() //db접속
	{
		$this->db = new mysqli('localhost', 'root', 'itaxi', 'itaxi'); //host, id, pw, database 순서입니다.
		$this->db->query('SET NAMES UTF8');
		if(mysqli_connect_errno())
		{
			header("Content-Type: text/html; charset=UTF-8");
			echo "데이터 베이스 연동에 실패했습니다.";
			exit;
		}
	}
	public function DBQ() //쿼리문을 실행한다
	{
		$this->result = $this->db->query($this->query);
	}
	public function DBO()// db 연결 끊기
	{
		
		$this->db->close();
	}
}
?>