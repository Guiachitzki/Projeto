package com.projetosmart.crm.view;


        import com.projetosmart.crm.controller.cadastro.CadastroController;
        import com.vaadin.flow.component.Text;
        import com.vaadin.flow.component.Unit;
        import com.vaadin.flow.component.button.Button;
        import com.vaadin.flow.component.button.ButtonVariant;
        import com.vaadin.flow.component.combobox.ComboBox;
        import com.vaadin.flow.component.html.Div;
        import com.vaadin.flow.component.html.H1;
        import com.vaadin.flow.component.html.Span;
        import com.vaadin.flow.component.icon.Icon;
        import com.vaadin.flow.component.icon.VaadinIcon;
        import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
        import com.vaadin.flow.component.orderedlayout.VerticalLayout;
        import com.vaadin.flow.component.textfield.NumberField;
        import com.vaadin.flow.component.textfield.PasswordField;
        import com.vaadin.flow.component.textfield.TextField;
        import com.vaadin.flow.data.value.ValueChangeMode;
        import com.vaadin.flow.router.PageTitle;
        import com.vaadin.flow.router.Route;


@Route
@PageTitle("Cadastro")
public class TelaCadastro  extends VerticalLayout {

    /**
     *
     */
    private static final long serialVersionUID = 8529351529550322503L;

    public static final String ROUTE = "app-cadastro-usuario";


        private TextField primeiroNome;
    TextField crmText;
    CadastroController cadastroController = new CadastroController();
    private Object TelaInicialView;

    public TelaCadastro() {
        H1 titulo = new H1("Cadastrar Cliente");
        add(titulo);

        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setAlignItems(Alignment.CENTER);

        primeiroNome = new TextField("Nome");
        primeiroNome.setPlaceholder("João");
        primeiroNome.setWidth(250, Unit.PIXELS);

        TextField cidade = new TextField("Sobrenome");
        cidade.setPlaceholder("Antônio");
        cidade.setWidth(250, Unit.PIXELS);
        add(new HorizontalLayout(primeiroNome, cidade));

        TextField seguimento = new TextField("Seguimento");
        seguimento.setWidth(300, Unit.PIXELS);
        seguimento.setPlaceholder("Saúde");

    }

    public void cadastrar(Button cadastrar) {
        cadastrar.addClickListener(click -> cadastrar.getUI());
    }

}
