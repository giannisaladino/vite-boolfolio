<template>
    <div class="container py-4 fs-">
        <form>
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="name" class="form-control" id="exampleInputName" placeholder="Inserisci il tuo nome">
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Inserisci la tua email">
                <div id="emailHelp" class="form-text">Non condivideremo la tua email con nessuno.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Messaggio</label>
                <input type="text" class="form-control" placeholder="Inviaci un messaggio">
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped></style>