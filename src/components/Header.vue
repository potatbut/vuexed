<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/category1" class="nav-link">Category1</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/category2" class="nav-link">Category2</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/bag" class="nav-link">Bag</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a 
                            class="nav-link dropdown-toggle" 
                            href="#" id="navbarDropdownMenuLink" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                        Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>
    </div>
</template>

<script >

export default {

}
</script>

<style >

</style>