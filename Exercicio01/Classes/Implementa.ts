namespace empresa{
    let p = new Pessoa("JdC","123.123.123-23");
    p.setDtNascimento("1993-02-14");

    document.getElementById('nome').textContent = p.getNome();
}