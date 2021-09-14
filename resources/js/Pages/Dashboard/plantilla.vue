<template>
    <div>
        <div class="sidebar sidebar-dark sidebar-fixed sidebar-self-hiding-sm" id="sidebar">
            <div class="sidebar-brand d-none d-md-flex">
                <img width="118" height="46" src="/img/logotipo-para-su-empresa.jpg" alt="">
            </div>
            <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="">
                <li class="nav-item"><a class="nav-link" href="index.html">
                    <i class="fa fa-tachometer-alt"></i>&nbsp;
                    Inicio</a></li>
                <li class="nav-group"><a class="nav-link nav-group-toggle" href="#">
                    <i class="fa fa-shield-alt"></i>
                    &nbsp;Seguridad</a>
                    <ul class="nav-group-items">
                        <li class="nav-item"><a class="nav-link" href="base/accordion.html"><span
                            class="nav-icon"></span><i class="fa fa-user-lock"></i>&nbsp;Roles</a></li>
                        <li class="nav-item"><a class="nav-link" href="base/breadcrumb.html"><span
                            class="nav-icon"></span><i class="fa fa-users"></i>&nbsp; Usuarios</a></li>

                    </ul>
                </li>

            </ul>
            <button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
        </div>

        <div class="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
            <header class="header header-sticky mb-4">
                <div class="container-fluid">
                    <button class="header-toggler px-md-0 me-md-3" type="button"
                            onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="header-brand d-md-none" href="#">
                        <img width="118" height="46" src="/img/logotipo-para-su-empresa.jpg" alt="">
                    </a>
                    <!--<ul class="header-nav d-none d-md-flex">
                        <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Users</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
                    </ul>-->
                    <nav class="header-nav ms-auto me-4">
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input class="btn-check" id="btn-light-theme" type="radio" name="theme-switch"
                                   autocomplete="off" value="light" @change="handleThemeChange">
                            <label class="btn btn-primary" for="btn-light-theme">
                                <i class="fa fa-sun"></i>
                            </label>
                            <input class="btn-check" id="btn-dark-theme" type="radio" name="theme-switch"
                                   autocomplete="off" value="dark" @change="handleThemeChange">
                            <label class="btn btn-primary" for="btn-dark-theme">
                                <i class="fa fa-moon"></i>
                            </label>
                        </div>
                    </nav>
                    <ul class="header-nav me-3">
                        <li class="nav-item dropdown d-md-down-none"><a class="nav-link" data-coreui-toggle="dropdown"
                                                                        href="#" role="button" aria-haspopup="true"
                                                                        aria-expanded="false">
                            <i class="fa fa-bell"></i><span
                            class="badge badge-sm rounded-pill position-absolute top-0 end-0 bg-danger-gradient">5</span></a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg pt-0">
                                <div class="dropdown-header bg-light"><strong>You have 5 notifications</strong></div>
                                <a class="dropdown-item" href="#">
                                    <i class="fa fa-user"></i> New user registered</a>
                                <div class="dropdown-header bg-light"><strong>Server</strong></div>
                                <a class="dropdown-item d-block" href="#">
                                    <div class="text-uppercase mb-1"><small><b>CPU Usage</b></small></div>
                                    <span class="progress progress-thin">
<div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
     aria-valuemax="100"></div>
</span><small class="text-medium-emphasis">348 Processes. 1/4 Cores.</small>
                                </a><a class="dropdown-item d-block" href="#">
                                <div class="text-uppercase mb-1"><small><b>Memory Usage</b></small></div>
                                <span class="progress progress-thin">
<div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0"
     aria-valuemax="100"></div>
</span><small class="text-medium-emphasis">11444GB/16384MB</small>
                            </a><a class="dropdown-item d-block" href="#">
                                <div class="text-uppercase mb-1"><small><b>SSD 1 Usage</b></small></div>
                                <span class="progress progress-thin">
<div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0"
     aria-valuemax="100"></div>
</span><small class="text-medium-emphasis">243GB/256GB</small>
                            </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown d-md-down-none"><a class="nav-link" data-coreui-toggle="dropdown"
                                                                        href="#" role="button" aria-haspopup="true"
                                                                        aria-expanded="false">
                            <i class="fa fa-list"></i><span
                            class="badge badge-sm rounded-pill position-absolute top-0 end-0 bg-warning-gradient">5</span></a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg pt-0">
                                <div class="dropdown-header bg-light"><strong>You have 5 pending tasks</strong></div>
                                <a class="dropdown-item d-block" href="#">
                                    <div class="small mb-1">Upgrade NPM &amp; Bower<span
                                        class="float-end"><strong>0%</strong></span></div>
                                    <span class="progress progress-thin">
<div class="progress-bar bg-info" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0"
     aria-valuemax="100"></div>
</span>
                                </a><a class="dropdown-item d-block" href="#">
                                <div class="small mb-1">ReactJS Version<span
                                    class="float-end"><strong>25%</strong></span></div>
                                <span class="progress progress-thin">
<div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
     aria-valuemax="100"></div>
</span>
                            </a><a class="dropdown-item d-block" href="#">
                                <div class="small mb-1">VueJS Version<span class="float-end"><strong>50%</strong></span>
                                </div>
                                <span class="progress progress-thin">
<div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
     aria-valuemax="100"></div>
</span>
                            </a><a class="dropdown-item d-block" href="#">
                                <div class="small mb-1">Add new layouts<span
                                    class="float-end"><strong>75%</strong></span></div>
                                <span class="progress progress-thin">
<div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
     aria-valuemax="100"></div>
</span>
                            </a><a class="dropdown-item d-block" href="#">
                                <div class="small mb-1">Angular 8 Version<span
                                    class="float-end"><strong>100%</strong></span></div>
                                <span class="progress progress-thin">
<div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
     aria-valuemax="100"></div>
</span>
                            </a><a class="dropdown-item text-center border-top" href="#"><strong>View all tasks</strong></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown d-md-down-none"><a class="nav-link" data-coreui-toggle="dropdown"
                                                                        href="#" role="button" aria-haspopup="true"
                                                                        aria-expanded="false">
                            <i class="fa fa-envelope-open"></i><span
                            class="badge badge-sm rounded-pill position-absolute top-0 end-0 bg-info-gradient">7</span></a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg pt-0">
                                <div class="dropdown-header bg-light"><strong>You have 4 messages</strong></div>
                                <a class="dropdown-item" href="#">
                                    <div class="message">
                                        <div class="py-3 me-3 float-start">
                                            <div class="avatar"><img class="avatar-img" src="/img/7.jpg"
                                                                     alt="user@email.com"><span
                                                class="avatar-status bg-success"></span></div>
                                        </div>
                                        <div><small class="text-medium-emphasis">John Doe</small><small
                                            class="text-medium-emphasis float-end mt-1">Just now</small></div>
                                        <div class="text-truncate font-weight-bold"><span class="text-danger">!</span>
                                            Important message
                                        </div>
                                        <div class="small text-medium-emphasis text-truncate">Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
                                        </div>
                                    </div>
                                </a><a class="dropdown-item text-center border-top" href="#"><strong>View all
                                messages</strong></a>
                            </div>
                        </li>
                    </ul>
                    <ul class="header-nav">
                        <li class="nav-item dropdown d-flex align-items-center"><a class="nav-link py-0"
                                                                                   data-coreui-toggle="dropdown"
                                                                                   href="#" role="button"
                                                                                   aria-haspopup="true"
                                                                                   aria-expanded="false">
                            <div class="avatar avatar-md"><img class="avatar-img" src="/img/8.jpg"
                                                               ></div>
                        </a>
                            <div class="dropdown-menu dropdown-menu-end pt-0">
                                <div class="dropdown-header bg-light py-2">
                                    <div class="fw-semibold">Account</div>
                                </div>
                                <a class="dropdown-item" href="#">
                                    <i class="fa fa-bell"></i>
                                    Updates<span class="badge badge-sm bg-info-gradient ms-2">42</span></a><a
                                class="dropdown-item" href="#">
                                <i class="fa fa-envelope-open"></i>
                                Messages<span class="badge badge-sm badge-sm bg-success ms-2">42</span></a><a
                                class="dropdown-item" href="#">
                                <i class="fa fa-check-square"></i>
                                Tasks<span class="badge badge-sm bg-danger-gradient ms-2">42</span></a><a
                                class="dropdown-item" href="#">
                                <i class="fa fa-comment"></i>
                                Comments<span class="badge badge-sm bg-warning-gradient ms-2">42</span></a>
                                <div class="dropdown-header bg-light py-2">
                                    <div class="fw-semibold">Settings</div>
                                </div>
                                <a class="dropdown-item" href="#">
                                    <i class="fa fa-user"></i>
                                    Profile</a><a class="dropdown-item" href="#">
                                <i class="fa fa-user-cog"></i>
                                Settings</a><a class="dropdown-item" href="#">
                                <i class="fa fa-credit-card"></i>
                                Payments<span
                                class="badge badge-sm bg-secondary-gradient text-dark ms-2">42</span></a><a
                                class="dropdown-item" href="#">
                                <i class="fa fa-file"></i>
                                Projects<span class="badge badge-sm bg-primary-gradient ms-2">42</span></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">

                                <i class="fa fa-sign-out-alt"></i>
                                Logout</a>
                            </div>
                        </li>
                    </ul>

                </div>


            </header>
            <div class="body flex-grow-1 px-3">

                <div class="container-fluid mb-3">
                    <div class="row">
                        <div class="col-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb my-0 ms-2">
                                    <li class="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="#">Components</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="#">Icons</a>
                                    </li>
                                    <li class="breadcrumb-item active"><span>CoreUI Icons - Free</span></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-4">
                                <div class="card-header"><strong>Alerts</strong></div>
                                <div class="card-body">
                                    <p class="text-medium-emphasis small">Bootstrap alert is prepared for any length of
                                        text, as well as an optional close button. For a styling, use one of the
                                        <strong>required</strong> contextual classes (e.g.,<code>.alert-success</code>).
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
            </div>
            <footer class="footer">
                <div>
                    <p class="my-0">LARAVEL-SISTEM © 2021 .</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        handleThemeChange(e) {
            var event = document.createEvent('Event');
            event.initEvent('themeChange', true, true);

            if (e.target.value === 'light') {
                document.body.classList.remove('dark-theme');
            }
            if (e.target.value === 'dark') {
                document.body.classList.add('dark-theme');
            }
            document.body.dispatchEvent(event);
        }

    }


}
</script>

<style scoped>

</style>
