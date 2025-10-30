import { useState } from "react";
import type { Block } from "../../types";
import "./Constructor.scss";

export default function Constructor() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Добавление нового заголовка
  const addTitle = () => {
    setBlocks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "title", text: "" },
    ]);
  };

    // Добавление нового заголовка
  const addSubTitle = () => {
    setBlocks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "subTitle", text: "" },
    ]);
  };

  // Добавление нового абзаца
  const addParagraph = () => {
    setBlocks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "paragraph", text: "" },
    ]);
  };

  // Добавление новой картинки
  const addImage = () => {
    const url = prompt("Вставь ссылку на изображение:");
    if (!url) return;
    setBlocks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "image", url, alt: "" },
    ]);
  };

  // Редактирование текста
  const handleTextChange = (id: string, newText: string) => {
    setBlocks((prev) =>
      prev.map((block) =>
        "text" in block && block.id === id ? { ...block, text: newText } : block
      )
    );
  };

  // Удаление блока
  const deleteBlock = (id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  // Сохранение (JSON)
  const handleSave = () => {
    const article = {
      title: "Название статьи",
      previewImg: "https://example.com/preview.jpg",
      blocks,
    };
    console.log(JSON.stringify(article, null, 2));
    alert("JSON выведен в консоль");
  };

  return (
    <div className="constructor">
      <h1>Конструктор статьи</h1>

      <div className="constructor-buttons">
        <button onClick={addTitle}>Заголовок</button>
        <button onClick={addSubTitle}>Заголовок</button>
        <button onClick={addParagraph}>Текст</button>
        <button onClick={addImage}>Картинка</button>
        <button onClick={handleSave} className="save">Сохранить</button>
      </div>

      {blocks.length === 0 ? (
        <div className="lets-start">Пожмакай кнопочки и начнем!</div>
      ) : (
        <div className="constructor-result">
          {blocks.map((block) => (
            <div key={block.id} className="constructor-block">
              <button
                onClick={() => deleteBlock(block.id)}
                className="constructor-button-delete"
              >
                ✕
              </button>

              {block.type === "title" && (
                <textarea
                  value={block.text}
                  onChange={(e) => handleTextChange(block.id, e.target.value)}
                  className="constructor-input-title"
                  placeholder="Крутой заголовок"
                />
              )}

              {block.type === "paragraph" && (
                <textarea
                  value={block.text}
                  onChange={(e) => handleTextChange(block.id, e.target.value)}
                  className="constructor-input"
                  placeholder="Что б написать..."
                />
              )}

              {block.type === "image" && (
                <img
                  src={block.url}
                  alt={block.alt || ""}
                  className="constructor-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
