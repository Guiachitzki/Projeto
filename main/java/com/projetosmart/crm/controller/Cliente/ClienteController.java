package com.projetosmart.crm.controller.Cliente;

import com.projetosmart.crm.model.Cliente;
import com.projetosmart.crm.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping(path = "/cliente/{id}")
    public ResponseEntity buscar (@PathVariable("id") Integer id){
        return clienteRepository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(path = "/cliente/salvar")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente adicionar(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

    @PutMapping(path = "/cliente/{id}/atualizar")
    public Cliente editar(@RequestBody Cliente cliente){
         return clienteRepository.save(cliente);
    }

    @DeleteMapping(path = "/cliente/{id}/deletar")
    public void deletar(Cliente cliente){
        clienteRepository.delete(cliente);
    }

}
