package mma.boys.chat.controllers;

import mma.boys.chat.models.Message;
import mma.boys.chat.models.Sender;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.UUID;

@org.springframework.stereotype.Controller
public class Controller {


    @MessageMapping("/send")
    @SendTo("/topic/chat")
    public Message send(Message message) {
        message.setId(UUID.randomUUID());
        return message;
    }

}
