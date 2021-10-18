import "./styles.css";

const onClickAdd = () => {
  //inputから入力された値を取得
  const inputText = document.getElementById("add-text").value;

  //inputの内容を空にする
  document.getElementById("add-text").value = "";

  createImcompleteList(inputText);
  //alert(inputText);
};
/**
 * 	<li>
				<div list-row>
				TODOです
				<button>完了</button>
				<button>削除</button>
				</div>
			</li>	
 */
//未完了リストに追加する
const createImcompleteList = (text) => {
  // list生成
  const li = document.createElement("li");
  console.log(li);

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //それぞれボタンの生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  //削除ボタン
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const parentDiv = deleteBtn.parentNode;
    //console.log(parentDiv);
    const deleteTarget = parentDiv.parentNode;
    //console.log(deleteTarget);
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
    /**
   * <li>
				<div class="list-row">
				　<p>TODOでした</p>
				<button>戻す</button>
				</div>
			<li>
   */
  });

  //完了ボタンの処理
  completeBtn.addEventListener("click", () => {
    //listの生成
    const completeTodo = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";

    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //タスク名部分を生成 pタグ
    const p = document.createElement("p");
    p.innerText = text;

    div.appendChild(p);
    div.appendChild(backButton);
    completeTodo.appendChild(div);

    //完了したTodoリストの追加
    document.getElementById("complete-list").appendChild(completeTodo);

    //現在の未完了Todoの削除

    // 押された削除ボタンの親タグ(list)を未完了リストから削除
    //親div
    const parentDiv = completeBtn.parentNode;
    //console.log(parentDiv);
    //親リスト部分　削除したい部分
    const deleteTarget = parentDiv.parentNode;

    //戻すボタンに機能追加
    backButton.addEventListener("click", () => {
      const parentBackButton = backButton.parentNode;
      //親リスト部分　削除したい部分
      const deleteTarget = parentBackButton.parentNode;
      //完了したTodoから削除
      console.log(deleteTarget);
      document.getElementById("complete-list").removeChild(deleteTarget);

      createImcompleteList(parentBackButton.firstChild.innerText);
    });

    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //div要素に追加
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  console.log(div);

  //liタグの子要素に各要素を設定
  li.appendChild(div);

  console.log(li);

  //　未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
