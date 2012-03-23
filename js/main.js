(function($) {
    $(document).ready(function() {
        var columns = [
            new Column('Homepage', '#ccc', 200),
            new Column('Talent', '#eee', 200),
            new Column('Skills', '#ccc', 200),
            new Column('Employers', '#eee', 200),
            new Column('Enterprise', '#ccc', 200),
        ];
        
        var visualizer = new Visualizer(columns, new Data());
    });
})(jQuery);