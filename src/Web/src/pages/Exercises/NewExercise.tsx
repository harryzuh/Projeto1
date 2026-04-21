import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewExercise() {
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [orientacoes, setOrientacoes] = useState("")
  const [tagInput, setTagInput] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [imagemInput, setImagemInput] = useState("")
  const [imagens, setImagens] = useState<string[]>([])

  const addTag = () => {
    const tag = tagInput.trim()
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag])
    }
    setTagInput("")
  }

  const removeTag = (tag: string) => setTags(tags.filter(t => t !== tag))

  const addImagem = () => {
    const url = imagemInput.trim()
    if (url && !imagens.includes(url)) {
      setImagens([...imagens, url])
    }
    setImagemInput("")
  }

  const removeImagem = (url: string) => setImagens(imagens.filter(i => i !== url))

  const handleSalvar = () => {
    if (!titulo.trim()) {
      alert("O título é obrigatório.")
      return
    }
    // TODO: POST /api/v1/exercicios
    alert(`Exercício "${titulo}" criado com sucesso!`)
    navigate("/exercicios")
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>

      <button
        onClick={() => navigate("/exercicios")}
        style={{ background: "none", border: "none", color: "#3EBAD2", fontWeight: "bold", fontSize: "16px", marginBottom: "16px", cursor: "pointer" }}
      >
        ← Voltar
      </button>

      <h2 style={{ color: "#3EBAD2", fontWeight: "bold", letterSpacing: "2px", marginBottom: "32px" }}>
        NOVO EXERCÍCIO
      </h2>

      <div className="d-flex flex-column gap-3">

        <div>
          <label style={{ fontWeight: "500" }}>Título *</label>
          <input
            type="text"
            className="form-control mt-1"
            style={{ borderRadius: "8px" }}
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label style={{ fontWeight: "500" }}>Descrição</label>
          <textarea
            className="form-control mt-1"
            style={{ borderRadius: "8px", resize: "vertical" }}
            rows={3}
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        </div>

        <div>
          <label style={{ fontWeight: "500" }}>Orientações</label>
          <textarea
            className="form-control mt-1"
            style={{ borderRadius: "8px", resize: "vertical" }}
            rows={3}
            value={orientacoes}
            onChange={e => setOrientacoes(e.target.value)}
          />
        </div>

        <div>
          <label style={{ fontWeight: "500" }}>Tags</label>
          <div className="d-flex gap-2 mt-1">
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: "8px" }}
              placeholder="Ex: RPG, Cervical"
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addTag())}
            />
            <button
              onClick={addTag}
              style={{ backgroundColor: "#3EBAD2", color: "white", border: "none", borderRadius: "8px", padding: "8px 16px", whiteSpace: "nowrap", cursor: "pointer" }}
            >
              Adicionar
            </button>
          </div>
          {tags.length > 0 && (
            <div className="d-flex gap-2 flex-wrap mt-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  style={{ backgroundColor: "#3EBAD2", color: "white", borderRadius: "20px", padding: "2px 12px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0", fontSize: "14px", lineHeight: "1" }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div>
          <label style={{ fontWeight: "500" }}>Imagens (URLs)</label>
          <div className="d-flex gap-2 mt-1">
            <input
              type="url"
              className="form-control"
              style={{ borderRadius: "8px" }}
              placeholder="https://..."
              value={imagemInput}
              onChange={e => setImagemInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addImagem())}
            />
            <button
              onClick={addImagem}
              style={{ backgroundColor: "#3EBAD2", color: "white", border: "none", borderRadius: "8px", padding: "8px 16px", whiteSpace: "nowrap", cursor: "pointer" }}
            >
              Adicionar
            </button>
          </div>
          {imagens.length > 0 && (
            <div className="d-flex flex-column gap-1 mt-2">
              {imagens.map(url => (
                <div key={url} className="d-flex align-items-center gap-2" style={{ fontSize: "13px", color: "#555" }}>
                  <span style={{ flex: "1", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{url}</span>
                  <button
                    onClick={() => removeImagem(url)}
                    style={{ background: "none", border: "none", color: "#EE715F", cursor: "pointer", fontWeight: "bold", fontSize: "16px" }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <div className="mt-4 d-flex gap-3">
        <button
          onClick={handleSalvar}
          style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "10px 32px", fontWeight: "500", fontSize: "16px", cursor: "pointer" }}
        >
          Salvar
        </button>
        <button
          onClick={() => navigate("/exercicios")}
          style={{ backgroundColor: "#ccc", color: "#333", border: "none", borderRadius: "8px", padding: "10px 32px", fontWeight: "500", fontSize: "16px", cursor: "pointer" }}
        >
          Cancelar
        </button>
      </div>

    </div>
  )
}

export default NewExercise